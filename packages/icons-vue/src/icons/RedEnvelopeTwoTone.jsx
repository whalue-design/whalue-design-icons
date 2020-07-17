// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedEnvelopeTwoToneSvg from '@whalue-design/icons-svg/lib/asn/RedEnvelopeTwoTone';

export default {
  name: 'IconRedEnvelopeTwoTone',
  displayName: 'RedEnvelopeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedEnvelopeTwoToneSvg } },
      children,
    ),
};