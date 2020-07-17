// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InteractionTwoToneSvg from '@whalue-design/icons-svg/lib/asn/InteractionTwoTone';

export default {
  name: 'IconInteractionTwoTone',
  displayName: 'InteractionTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InteractionTwoToneSvg } },
      children,
    ),
};