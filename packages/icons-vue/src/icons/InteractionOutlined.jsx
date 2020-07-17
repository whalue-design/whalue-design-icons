// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InteractionOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InteractionOutlined';

export default {
  name: 'IconInteractionOutlined',
  displayName: 'InteractionOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InteractionOutlinedSvg } },
      children,
    ),
};