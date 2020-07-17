// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedEnvelopeFilledSvg from '@whalue-design/icons-svg/lib/asn/RedEnvelopeFilled';

export default {
  name: 'IconRedEnvelopeFilled',
  displayName: 'RedEnvelopeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedEnvelopeFilledSvg } },
      children,
    ),
};