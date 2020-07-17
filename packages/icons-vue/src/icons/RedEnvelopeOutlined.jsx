// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedEnvelopeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RedEnvelopeOutlined';

export default {
  name: 'IconRedEnvelopeOutlined',
  displayName: 'RedEnvelopeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedEnvelopeOutlinedSvg } },
      children,
    ),
};